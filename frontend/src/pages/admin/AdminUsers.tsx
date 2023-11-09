import Button from "../../components/admin/Button";
import Pagination from "../../components/admin/Pagination";
import RecordsTable from "../../components/admin/RecordsTable";
import SearchInput from "../../components/admin/SearchInput";

const data = [
  //placeholder data, remove when api is done
  {
    user: "d4ydr34mer",
    role: "Admin",
  },
  {
    user: "badpapi",
    role: "Admin",
  },
  {
    user: "andite",
    role: "Admin",
  },
  {
    user: "hatdog",
    role: "Admin",
  },
  {
    user: "talong",
    role: "Admin",
  },
];

export default function AdminUsers() {
  return (
    <div className="w-full max-w-[1024px] mx-auto shadow-xl card bg-base-100 mt-20">
      <h1 className="w-full px-5 py-2 mb-3 text-xl text-center text-white rounded-t-sm bg-second">
        Users
      </h1>
      <div className="card-body">
        <div className="flex flex-col-reverse justify-between gap-5 md:flex-row">
          <div className="flex w-full">
            <SearchInput />
          </div>
          <div className="flex w-full">
            <Button>Create New</Button>
          </div>
        </div>
        <RecordsTable
          role={true}
          data={data}
          name="Users"
          avatarToggle={true}
        />
        <Pagination />
      </div>
    </div>
  );
}
