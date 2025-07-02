import { CSSProperties, memo } from "react";
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    width?: string|number;
    height?: string|number;
    border?: string|number;
    className?: string;
}
const Skeleton = memo(({width, height, border, className = ''}: SkeletonProps) => {

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    }

    const combinedClasses = `${cls.skeleton} ${className}`
  return (
    <div className={combinedClasses.trim()} style={styles} />
  )
})

export default Skeleton
