import { useRecoilState } from "recoil";
import * as S from "./FileDnD.style";
import { useEffect, useState } from "react";
import { aimImg } from "@/app/recoil/AimData";

const FileDnD = () => {
  const [isActive, setActive] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useRecoilState(aimImg);

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);

  const handleDrop = (event: any) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
    setActive(false);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);
  return (
    <S.Container
      onDragEnter={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
    >
      <S.FileInput type="file" />

      <S.PreviewLabel state={isActive}>
        {previewUrl ? (
          <S.ImagePreview src={previewUrl} alt="Image preview" />
        ) : (
          <S.PreviewMessage>
            자신의 조준선 이미지를 드롭하세요.
          </S.PreviewMessage>
        )}
        <S.PreviewDescription>파일당 최대 3MB</S.PreviewDescription>
      </S.PreviewLabel>
    </S.Container>
  );
};

export default FileDnD;
