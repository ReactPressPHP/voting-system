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
    <div className="flex flex-col justify-center items-center bg-slate-50 w-full pb-20">
      <div className="card w-full max-w-[1024px] bg-base-100 shadow-xl mt-10 py-10 rounded-3xl border border-accent">
        <div className="card-body">
          <h1 className="text-2xl text-accent font-bold mb-5">Create New Event</h1>
          <form action="" method="post">
            <div className="form-control mb-3">
              <label className="font-bold">Event Title:</label>
              <Input type="text" name="title" placeholder="Title"  />
            </div>
            <div className="form-control mb-3">
            <label className="font-bold">Short Description:</label>
              <textarea
                name="short_description"
                className="textarea textarea-bordered w-full"
              />
            </div>
            <div className="form-control mb-3">
              <label className="font-bold">Content:</label>
              <textarea
                name="content"
                className="textarea textarea-bordered w-full"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-2 py-10">
              <div className="form-control mb-3 w-full max-w-[100%] md:max-w-[50%]">
                <label className="font-bold" htmlFor="opening">Opening Date</label>
                <input type="date" name="opening" placeholder="Type here" className="input input-bordered w-full" />
              </div>
              <div className="form-control mb-3 w-full max-w-[100%] md:max-w-[50%]">
                <label className="font-bold" htmlFor="opening">Closing Date</label>
                <input type="date" name="closing" placeholder="Type here" className="input input-bordered w-full" />
              </div>
            </div>

            {/* <div className="flex  justify-between items-center flex-row gap-56 ">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-2xl gap-2">Opening:</label>
                <p className="px-5 py-2 text-xl font-bold rounded-3xl bg-accent text-white text">
                  01/01/2000
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-2xl">Closing:</label>
                <p className="px-5 py-2 text-xl font-bold rounded-3xl bg-accent text-white text">
                  01/01/2000
                </p>
              </div>
            </div> */}
            <div className=" w-full flex flex-row mt-5 justify-center gap-5">
              {/* <div className="flex flex-col gap-2  bg-accent w-1/3 rounded-xl items-center justify-center">
                <label className="font-extrabold text-3xl">TEAMS:</label>
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
              <div className="w-full">
                {/* Other components or content */}
                <TeamSelection />
              </div>
            </div>
            <div className="py-10">
              <label className="font-bold" htmlFor="cover_image">Upload Cover Image</label>
              <FileUploader
                allowedTypes={allowedImageTypes}
                onFileUpload={handleFileUpload}
              />
            </div>
            <div className="mb-3 flex">
              <button className="btn btn-lg btn-primary ms-auto rounded-lg">Publish Event</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    
  );
}
