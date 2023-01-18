export const FileUpload: React.FC<any> = ({ saveFile }) => {
  const onFileUploadChange = (e: any) => {
    saveFile(e.target.files[0]);
  };

  return <input accept="image/*" id="icon-button-file" type="file" onChange={onFileUploadChange} />;
};
