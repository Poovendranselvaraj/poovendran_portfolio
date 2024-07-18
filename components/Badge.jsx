'use client';
import CountUp from 'react-countup';

const Badge = ({
  containerStyles, 
  icon, 
  endCountNum, endcountText, badgeText}) => {
  return (
    <div className={'badge ${containerStyles}'}>Badge</div>
  )
}

export default Badge