import React from "react"
import { ResultItemDetailInfo } from "./ResultItem"
import Tag from "./Tag"
import clsx from "clsx"

type Props = {
  colorIndex: number 
  info: ResultItemDetailInfo
}

const ResultItemDetailInfo: React.FC<Props> = ({
  colorIndex,
  info
}: Props) => {
  return (
    <Tag className={clsx("rounded-lg", {
      "info-tag-blue": colorIndex === 0,
      "info-tag-yellow": colorIndex === 1,
      "info-tag-green": colorIndex === 2,
      "info-tag-purple": colorIndex === 3,
      "info-tag-red": colorIndex === 4,
    })}>
      <div className="flex flex-row gap-x-1 p-2 items-center">
        <span className="font-semibold text-sm">{info.name}</span>
        <span>:</span>
        <span className="text-sm">{info.status}</span>
      </div>
    </Tag>
  )
}

export default ResultItemDetailInfo
