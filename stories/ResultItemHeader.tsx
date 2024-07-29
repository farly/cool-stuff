import React from 'react';
import Tag from "./Tag"
import XIcon from './XIcon';

type Props = {
  PMID: string
}

const ResultItemHeader: React.FC<Props> = ({
  PMID
}: Props) => {
  return (
    <div className="flex flex-row gap-x-3">
      <div className="flex flex-col">
        <span className="text-[#7E86A7] text-sm font-semibold">
          PMID: {PMID} 
        </span>
        <span className="text-[#53606D]">
          A pandemic of acute respiratory distress syndrome-role of <b>lung transplant</b> in <b>coronavirus</b> disease-2019-associated respiratory failure
        </span>
      </div>
      <div className="w-[200px]">
        <Tag className="bg-[#F5E9EA] text-[#9F1E2F] rounded-3xl px-3 py-2">
          <div className="flex flex row items-center gap-x-3">
              <XIcon />
              <span className="text-sm">
                AI Excluded
              </span>
          </div>
        </Tag>
      </div>
    </div>
  )
}

export default ResultItemHeader 
