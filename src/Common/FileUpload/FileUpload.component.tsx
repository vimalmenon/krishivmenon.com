export const FileUpload: React.FC = () => {
  const onFileUploadChange = (e: any) => {
    console.log(e.target.files[0]);
  };

  return <input accept="image/*" id="icon-button-file" type="file" onChange={onFileUploadChange} />;
};
