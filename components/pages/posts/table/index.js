import Authors from "./authors";
import EngagementIcon from "./engagement";
import ActionIcon from "./action";
import Link from 'next/link'
import moment from "moment";

const columns = [
  {
    title: "Title",
    dataIndex: 'title',
    key: 'title',
    align: "center"
  },
  {
    title: "Authros",
    dataIndex: 'authors',
    key: 'authors',
    align: "center",
    render: (text, record) => <Authors authors={record.authors} />
  },
  {
    title: "Date",
    dataIndex: 'date',
    key: 'date',
    align: "center",
    render: (text, record) => moment(record.createdAt).format('ll')
  },
  {
    title: "Views",
    dataIndex: 'views',
    key: 'views',
    align: "center",
    render: () => 123
  },
  {
    title: "Reactions",
    dataIndex: 'reactions',
    key: 'reactions',
    align: "center",
    render: () => 312
  },
  {
    title: "CTR",
    dataIndex: 'ctr',
    key: 'ctr',
    align: "center",
    render: () => 49
  },
  {
    title: "Avg Duration",
    dataIndex: 'avgDuration',
    key: 'avgDuration',
    align: "center",
    render: () => "03:34"
  },
  {
    title: 'Engagement',
    dataIndex: 'engagement',
    align: "center",
    key: 'engagement',
    render: text => <EngagementIcon text={text} />
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    align: "center",
    key: 'actions',
    render: (text, record) => {
      return (
        <Link href={`/posts/${record._id}`} as={`/posts/${record._id}`}>
          <a>
            <ActionIcon text={text} />
          </a>
        </Link>
      )
    }
  }
];

export default columns;