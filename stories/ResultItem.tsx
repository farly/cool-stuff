import React from 'react';
import ResultItemHeader from './ResultItemHeader';
import ResultItemSummary from './ResultItemSummary';
import ResultItemDetail from './ResultItemDetail';

interface IResultItem  {
  item: {
    PMID: string
    summary: string
    details: Detail[]
  }
}

export type Detail = {
  title: string
  info: ResultItemDetailInfo[]
}

export type ResultItemDetailInfo = {
  name: string
  status: string
}

const ResultItem: React.FC<IResultItem> = ({item}) => {
  // TODO Create your component here
  return (
    <div className="border border-solid flex flex-col w-[930px] p-8 rounded-lg gap-y-4">
      <ResultItemHeader PMID={item.PMID}/>
      <ResultItemSummary summaryText={item.summary}/>
      <ResultItemDetail details={item.details}/>
    </div>
  )
};

export default ResultItem;
