import React from "react"
import { Detail } from "./ResultItem"
import ResultItemDetailInfo from "./ResultItemDetailInfo"

type Props = {
  details: Detail[] 
}

const ResultItemDetail: React.FC<Props> = ({details}: Props) => {
  return (
    <div className="flex flex-col gap-y-3">
      {details.map(detail => (
        <div className="flex flex-row items-center">
          <span className="w-[150px] text-[#53606D] mr-6 font-semibold text-sm">
            {detail.title}
          </span>

          <div className="flex flex-row gap-x-2">
            {detail.info.map((i,index) => (<ResultItemDetailInfo colorIndex={index} key={index} info={i} />))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResultItemDetail
