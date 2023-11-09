import RecordItem from "./RecordItem";

export default function RecordsTable({
  role = false,
  data,
  name = "Names",
  avatarToggle = false,
}) {
  return (
    <div className="pt-20">
      <div className="w-full mx-auto overflow-x-auto bg-white">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th>{name}</th>
              {role && <th>Role</th>}
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <RecordItem
                user={item.user}
                roleName={item?.role}
                avatarToggle={avatarToggle}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
