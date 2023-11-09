export default function RecordItem({
  user,
  avatar,
  roleName,
  handleEdit,
  handleDelete,
  avatarToggle = false,
}) {
  return (
    <tr>
      {/* <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th> */}
      <td>
        <div className="flex items-center space-x-3">
          {avatarToggle && (
            <div className="avatar">
              <div className="w-12 h-12 mask mask-squircle">
                <img src={avatar} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          )}
          <div>
            <div className="font-bold">{user}</div>
          </div>
        </div>
      </td>
      <td>{roleName}</td>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th>
        <button className="btn btn-ghost btn-xs" onClick={handleEdit}>
          edit
        </button>
      </th>
      <th>
        <button className="btn btn-ghost btn-xs" onClick={handleDelete}>
          delete
        </button>
      </th>
    </tr>
  );
}
