import { useEffect, useRef } from 'react';
import styles from './index.less';

/**
 * Unicorn Studio 背景组件
 * 作为整个网站的背景板使用
 * 使用原项目的 Unicorn Studio WebGL 特效
 */
export default function UnicornBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('lkm');
    const container = containerRef.current;
    if (!container) return;

    // 获取配置的项目 ID
    const projectId =
      typeof window !== 'undefined' && window?.TUGRAPH_UNICORN_FOOTER_PROJECT
        ? String(window.TUGRAPH_UNICORN_FOOTER_PROJECT)?.trim()
        : '';

    // 如果没有项目 ID,显示静态渐变背景
    const showFallback = () => {
      container.removeAttribute('data-us-project');
      container.removeAttribute('data-us-scale');
      container.removeAttribute('data-us-dpi');
      container.removeAttribute('data-us-production');
      container.style.background =
        'radial-gradient(60% 55% at 50% 60%, rgba(64, 196, 255, 0.14) 0%, rgba(96, 165, 250, 0.1) 26%, rgba(59, 130, 246, 0.05) 44%, rgba(0, 0, 0, 0) 72%)';
      container.style.opacity = '0.65';
    };

    // 如果没有项目 ID,使用后备背景
    if (!projectId) {
      showFallback();
      return;
    }

    // 初始化 Unicorn Studio
    const initUnicorn = () => {
      container.style.background = 'transparent';
      container.setAttribute('data-us-project', projectId);
      container.setAttribute('data-us-scale', '1');
      container.setAttribute('data-us-dpi', '1.5');
      container.setAttribute('data-us-production', 'true');

      try {
        if (window?.UnicornStudio?.init) {
          window.UnicornStudio.init().catch(() => {
            // 如果初始化失败,显示后备背景
            showFallback();
          });
        }
      } catch (error) {
        console.error('Unicorn Studio init error:', error);
        showFallback();
      }
    };

    // Unicorn Studio SDK URL
    const SDK_URL =
      'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js';

    // 检查是否已经加载过 SDK
    if (window?.UnicornStudio?.init) {
      initUnicorn();
      return () => {
        try {
          window.UnicornStudio?.destroy?.();
        } catch (error) {
          console.error('Unicorn Studio destroy error:', error);
        }
      };
    }

    // 查找已存在的 SDK script 标签
    let existingScript = document.querySelector(
      'script[data-tugraph-unicorn-sdk]',
    ) as HTMLScriptElement | null;

    const handleLoad = () => {
      initUnicorn();
    };

    if (existingScript) {
      // 如果 script 已存在但还没加载完
      if (window?.UnicornStudio?.init) {
        initUnicorn();
      } else {
        existingScript.addEventListener('load', handleLoad);
      }

      return () => {
        existingScript?.removeEventListener('load', handleLoad);
        try {
          window?.UnicornStudio?.destroy?.();
        } catch (error) {
          console.error('Unicorn Studio destroy error:', error);
        }
      };
    }

    // 创建并加载 SDK
    const script = document.createElement('script');
    script.src = SDK_URL;
    script.async = true;
    script.setAttribute('data-tugraph-unicorn-sdk', '1');
    script.onload = handleLoad;
    script.onerror = () => {
      console.error('Failed to load Unicorn Studio SDK');
      showFallback();
    };

    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      try {
        window?.UnicornStudio?.destroy?.();
      } catch (error) {
        console.error('Unicorn Studio destroy error:', error);
      }
    };
  }, []);

  return <div ref={containerRef} className={styles['unicorn-bg']} />;
}
