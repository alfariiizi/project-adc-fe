"use client";

import { Input } from "../input";
import { useState } from "react";
import { Progress } from "../progress";
import { cn } from "~/lib/utils";

type InputFileValue<M extends boolean | undefined> = M extends true
  ? FileList
  : File;

type InputFileProps<M extends boolean | undefined = undefined> = {
  onFileUpload?: (value: InputFileValue<M>) => Promise<void>;
  fileValidation?: (value: InputFileValue<M>) => boolean;
  multiple?: M;
};

export default function InputFile<M extends boolean | undefined = undefined>({
  multiple,
  onFileUpload,
  fileValidation,
}: InputFileProps<M>) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const startSimulatedProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 1000);

    return interval;
  };

  return (
    <div className="">
      <Input
        type="file"
        multiple={multiple}
        className="rounded-md pt-3"
        onValueChange={async (value) => {
          async function upload() {
            if (onFileUpload) {
              const progressInterval = startSimulatedProgress();
              await onFileUpload(value as InputFileValue<M>);
              clearInterval(progressInterval);
              setUploadProgress(100);
            }
          }
          if (value) {
            if (fileValidation) {
              if (fileValidation(value as InputFileValue<M>)) {
                await upload();
              }
            } else {
              await upload();
            }
          }
        }}
      />
      <Progress
        value={uploadProgress}
        className={cn("h-1", uploadProgress === 0 && "opacity-0")}
      />
    </div>
  );
}

export { InputFile };
