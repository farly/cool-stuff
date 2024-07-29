import React from "react"

type Props = {
  summaryText: string 
}

const ResultItemSummary = ({
  summaryText
}: Props) => {
  return (
    <div className="space-x-1 text-[#53606D] text-sm">
      <span className="font-semibold">
        Summary : 
      </span>
      <span>
        {summaryText}
      </span>
    </div>
  )
}

export default ResultItemSummary
