import FileUploader from "../../components/FileUploader";
import Input from "../../components/Input";
import TeamSelection from "../../components/TeamSelection";

export default function AdminEventsCreate() {
  const allowedImageTypes = {
    "image/*": [".png", ".jpg", ".jpeg", ".svg"],
  };

  const handleFileUpload = (file: File): void => {
    console.log("File uploaded:", file);
  };

  return (
    <div className="pt-15 flex flex-col justify-center items-center bg-slate-50 w-full  pb-10">
      <h1>Title:</h1>
      <Input type="text" name="title" placeholder="Title" />
      <h1>Short Description:</h1>
      <textarea
        name="short_description"
        className="textarea textarea-bordered w-full h-25 rounded-md max-w-xl"
      />
      <h1>Description:</h1>
      <textarea
        name="description"
        className="textarea textarea-bordered w-full h-25 rounded-md max-w-xl"
      />
      <div className="flex  justify-between items-center flex-row gap-56 ">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl gap-2">Opening:</h1>
          <p className="px-5 py-2 text-xl font-bold rounded-3xl bg-accent text-white text">
            01/01/2000
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Closing:</h1>
          <p className="px-5 py-2 text-xl font-bold rounded-3xl bg-accent text-white text">
            01/01/2000
          </p>
        </div>
      </div>
      <div className=" w-full flex flex-row mt-5 justify-center gap-5">
        {/* <div className="flex flex-col gap-2  bg-accent w-1/3 rounded-xl items-center justify-center">
          <h1 className="font-extrabold text-3xl">TEAMS:</h1>
          {teams.map((team) => {
            return (
              <div
                key={team}
                className="  border-white border-4 w-11/12 mt-2 mb-2 rounded-xl text-center font-extrabold text-2xl "
              >
                {team}
              </div>
            );
          })}
        </div> */}
        <div>
          {/* Other components or content */}
          <TeamSelection />
        </div>
      </div>
      <div>
        <h2>Upload Logo</h2>
        <FileUploader
          allowedTypes={allowedImageTypes}
          onFileUpload={handleFileUpload}
        />
      </div>
    </div>
  );
}
