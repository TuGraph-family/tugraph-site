import { motion } from 'framer-motion';
import styles from './index.less';
import { useEffect, useRef } from 'react';
import TrackSVG from '@/components/TrackSVG';
import { AppstoreOutlined } from '@ant-design/icons';
import { useIntl } from 'umi';

const HeroCards = () => {
  const intl = useIntl();
  const canvasRefs = [
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
    useRef<HTMLCanvasElement>(null),
  ];

  useEffect(() => {
    canvasRefs.forEach((canvasRef) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const particles: Array<{
        x: number;
        y: number;
        radius: number;
        opacity: number;
        speed: number;
        angle: number;
        flickerSpeed: number;
        flickerPhase: number;
      }> = [];

      const PARTICLE_COUNT = 40;

      const initParticles = () => {
        const w = canvas.width;
        const h = canvas.height;
        particles.length = 0;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            radius: 0.4 + Math.random() * 0.8,
            opacity: 0.3 + Math.random() * 0.5,
            speed: 0.15 + Math.random() * 0.25,
            angle: Math.PI / 2 + (Math.random() - 0.5) * 0.3,
            flickerSpeed: 0.02 + Math.random() * 0.03,
            flickerPhase: Math.random() * Math.PI * 2,
          });
        }
      };

      const resize = () => {
        const rect = canvas.parentElement?.getBoundingClientRect();
        if (rect) {
          canvas.width = rect.width;
          canvas.height = rect.height;
          initParticles();
        }
      };

      resize();
      window.addEventListener('resize', resize);

      let animationId: number;

      const animate = () => {
        if (!ctx || !canvas) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
          p.x += Math.cos(p.angle) * p.speed;
          p.y -= Math.sin(p.angle) * p.speed;

          if (p.y < -5) {
            p.y = canvas.height + 5;
            p.x = Math.random() * canvas.width;
          }
          if (p.x < -5) p.x = canvas.width + 5;
          if (p.x > canvas.width + 5) p.x = -5;

          p.flickerPhase += p.flickerSpeed;
          const flicker = 0.5 + 0.5 * Math.sin(p.flickerPhase);
          const currentOpacity = p.opacity * flicker;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
          ctx.fill();

          const gradient = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.radius * 2.5,
          );
          gradient.addColorStop(
            0,
            `rgba(255, 255, 255, ${currentOpacity * 0.5})`,
          );
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        });

        animationId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationId);
      };
    });
  }, []);

  const cards = [
    {
      title: intl.formatMessage({ id: 'hero.card.title' }),
      width: 270,
      delay: 0.15,
      floatDuration: 3,
      positionClass: styles.cardPosition0,
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/nJShRpoerKMAAAAAQBAAAAgAeh8WAQFr/original',
      content: (
        <div className={styles.ul}>
          <div>{intl.formatMessage({ id: 'hero.card.li' })}</div>
          <div>{intl.formatMessage({ id: 'hero.card.li2' })}</div>
        </div>
      ),
    },
    {
      title: intl.formatMessage({ id: 'hero.card.title2' }),
      width: 240,
      delay: 0.2,
      floatDuration: 4,
      floatDelay: 0.5,
      positionClass: styles.cardPosition1,
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/vNY2QomhzA0AAAAAQDAAAAgAeh8WAQFr/original',
      content: (
        <div className={styles.img}>
          <img src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/s8LeSou1CWsAAAAAQdAAAAgAeh8WAQFr/fmt.avif" />
        </div>
      ),
    },
    {
      title: intl.formatMessage({ id: 'hero.card.title3' }),
      width: 270,
      delay: 0.25,
      floatDuration: 3.5,
      floatDelay: 1,
      positionClass: styles.cardPosition2,
      icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/Z97KQoYzmuIAAAAAQBAAAAgAeh8WAQFr/original',
      content: (
        <div className={styles.ul}>
          <div>{intl.formatMessage({ id: 'hero.card.li' })}</div>
          <div>{intl.formatMessage({ id: 'hero.card.li2' })}</div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.heroCardsContainer}>
      <TrackSVG />
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: card.delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`${styles.heroCardWrapper} ${card.positionClass}`}
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: card.floatDuration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: card.floatDelay || 0,
            }}
            style={{ width: card.width }}
            className={styles.heroCard}
          >
            {/* 卡片内容 */}
            <div className={styles.head}>
              <div className={styles.title}>
                <div className={styles.tag}>0{index + 1}</div>
                <div className={styles.title}>{card.title}</div>
              </div>
              <div className={styles.icon}>
                <img src={card.icon} />
              </div>
            </div>
            <div className={styles.main}>{card.content}</div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroCards;
