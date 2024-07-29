import clsx from "clsx"
import React, { PropsWithChildren, ReactNode } from "react"

type Props = {
  className?: string
} & PropsWithChildren

const Tag: React.FC<Props> = ({
  className,
  children
} : Props) => {
  return (
    <div className={clsx("border", className)}>
      {children}
    </div>
  )
}

export default Tag
