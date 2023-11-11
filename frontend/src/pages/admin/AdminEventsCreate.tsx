import { useState } from "react";
import FileUploader from "../../components/FileUploader";
import Input from "../../components/Input";
import TeamSelection from "../../components/TeamSelection";
import { RegisterEvent } from "../../components/admin/libs/types";
import createEvent from "../../components/admin/libs/createEvent";
import Toast from "../../components/admin/toast";

export default function AdminEventsCreate() {
  const [response, setResponse] = useState<RegisterEvent>();
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
          <h1 className="text-2xl text-accent font-bold mb-5">
            Create New Event
          </h1>
          <form
            onSubmit={async (event) => {
              const data = await createEvent(event);
              console.log("data", data);
              if (!data) throw new Error("No data returned");
              setResponse(data);
              if (data.id) {
                (event.target as HTMLFormElement).reset();
              }
            }}
          >
            <div className="form-control mb-3">
              <label className="font-bold">Event Title:</label>

              <Input type="text" name="title" placeholder="Title" />
              {response?.error && (
                <div className="text-red-700">
                  {Object.values(response?.error)}
                </div>
              )}
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
                <label className="font-bold" htmlFor="opening">
                  Opening Date
                </label>
                <input
                  type="datetime-local"
                  name="voting_startdate"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control mb-3 w-full max-w-[100%] md:max-w-[50%]">
                <label className="font-bold" htmlFor="opening">
                  Closing Date
                </label>
                <input
                  type="datetime-local"
                  name="voting_enddate"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className=" w-full flex flex-row mt-5 justify-center gap-5">
              <div className="w-full">
                <TeamSelection />
              </div>
            </div>
            <div className="py-10">
              <label className="font-bold" htmlFor="cover_image">
                Upload Cover Image
              </label>
              <FileUploader
                allowedTypes={allowedImageTypes}
                onFileUpload={handleFileUpload}
              />
            </div>
            <div className="mb-3 flex">
              <button
                type="submit"
                className="btn btn-lg btn-primary ms-auto rounded-lg"
              >
                Publish Event
              </button>
            </div>
            {/* {response?.id && <Toast />} */}
          </form>
        </div>
      </div>
    </div>
  );
}
