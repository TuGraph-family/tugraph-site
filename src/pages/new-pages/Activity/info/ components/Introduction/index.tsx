import { SubTitle } from '@/components/SubTitle';
import ReactMarkdown from 'react-markdown';
const Introduction = () => {
  const markdown = `
  # Hello, world!
  
  新一代数据底座，来外滩大会解锁图智能前沿技新一代数据底座，来外滩大会解锁图智能前沿技…新一代数据底座，来外滩大会解锁图智能前沿技…新一代数据底座，来外滩大会解锁图智能前沿技…新一代数据底座，来外滩大会解锁图智能前沿技…新一代数据底座，来外滩大会解锁图智能前沿技…
  
  新一代数据底座，来外滩大会解锁图智能前沿技…新一代数据底座，来外滩大会解锁图智能前沿技…新一代数据底座，来外滩大会解锁图智能前沿技…
  
  ## 哈哈大坏蛋
  
  新一代数据底座，来外滩大会解锁图智能前沿技…新一代数据底座，来外滩大会解锁图智能前沿技…新一代数据底座，来外滩大会解锁图智能前沿技…
  新一代数据底座，来外滩大会解锁图智能前沿技…新一代数据底座，来外滩大会解锁图智能前沿技…
  
  新一代数据底座，来外滩大会解锁图智能前沿技…`;

  return (
    <div>
      <SubTitle title="活动简介" />

      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Introduction;
