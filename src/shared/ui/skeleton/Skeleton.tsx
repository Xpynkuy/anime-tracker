import { CSSProperties, memo } from "react";
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    width?: string|number;
    height?: string|number;
    border?: string|number;
}
const Skeleton = memo(({width, height, border}: SkeletonProps) => {

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    }
  return (
    <div className={cls.skeleton} style={styles} />
  )
})

export default Skeleton
