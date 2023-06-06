import { useSetAtom } from "jotai";
import { useEffect } from "react";
import useSWR from "swr";

import { API_URL } from "../lib/constants";
import { fetcher } from "../lib/helpers";
import { lastInscriptionDataAtom } from "../lib/store";

import { InscriptionResponse, ListResponse } from "../lib/types";
import InscriptionCard from "./InscriptionCard";
import Table, {TableColumn} from "@/components/table/Table";
import moment from "moment";

const columns: TableColumn<InscriptionResponse>[] = [
    {
        name: 'Inscritions',
        sortable: false,
        key: 'address',
        render: (data) => <>Inscritions#{data?.number}</>,
    },
    {
        name: 'Transfer',
        sortable: false,
        key: 'timestamp',
        render: (data) => <>{data?.timestamp}</>,
    },
    {
        name: 'Time',
        sortable: false,
        key: 'timestamp',
        render: (data) => <>{moment(data?.timestamp).format('YYYY.MM.DD HH:mm:ss')}</>,
    },
]
const GalleryPreview = () => {
  const setLastInscriptionData = useSetAtom(lastInscriptionDataAtom);

  const { data, error, isLoading } = useSWR<ListResponse<InscriptionResponse>>(
    `${API_URL}/inscriptions`,
    fetcher
  );

  useEffect(() => {
    if (data?.results?.length) {
      setLastInscriptionData({
        number: data.results[0].number.toString(),
        date: new Date(data.results[0].timestamp),
      });
    }
  }, [data, setLastInscriptionData]);

  if (error) return <span>Something went wrong ʕ•̠͡•ʔ</span>;

  const previews = data ? data.results : Array(12).fill(null); // skeleton values

  return (
    <>
      <div>
        {/*{previews.slice(0, 12).map((i, index) => (*/}
        {/*  <InscriptionCard key={index} inscription={i} />*/}
        {/*))}*/}
          <div>
              {
                  previews && <Table data={previews} columns={columns} />
              }
          </div>


      </div>
      {/* todo: re-add figma link to full feed */}
      {/* <div className="my-4 text-center underline">
        <a href="/inscriptions">More</a>
      </div> */}
    </>
  );
};

export default GalleryPreview;
