import { _BOARD_INFOS } from "@Constant/.";
import { ContentContainer } from "@Organisms/Main/BoardContent/style";
import {
  BoardContentPagenationSelector,
  GetBoardContentLengthSelector,
} from "@Recoil/BoardContent";
import { ContentType } from "@Type/.";
import { hasBoardContent } from "@Util/.";
import { Suspense, useState } from "react";
import { useRecoilValue } from "recoil";
import BoardPreview from "@Molecules/BoardPreview";
import { BoardContainer } from "./styles";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";

const BoardList = ({ type }: { type: string }) => {
  const {
    apiSrc,
    previewType,
    alignPreview = "column;",
    viewSize,
  } = _BOARD_INFOS[type];
  const [pageNum, setPageNum] = useState<number>(0);
  const history = useHistory();

  const boardContents =
    hasBoardContent(apiSrc, type) &&
    useRecoilValue<ContentType[]>(
      BoardContentPagenationSelector([pageNum, apiSrc, viewSize])
    );
  console.log(hasBoardContent(apiSrc, type));
  console.log(apiSrc);
  console.log(boardContents);
  const totalBoardContentLength =
    (hasBoardContent(apiSrc, type) &&
      useRecoilValue<number>(GetBoardContentLengthSelector(apiSrc))) ??
    1;

  const handleDetailMove = (e: any) => {
    const target = e.target.closest("#boardContainer");
    if (!target) return;
    const idx = target.getAttribute("data-idx");
    const { pageSrc: path } = _BOARD_INFOS[type];
    history.push(`${path}/${idx}`);
  };

  const boardType = type === "사진첩" ? "image" : "image";

  return (
    <>
      <Suspense fallback={null}>
        <ContentContainer
          alignPreview={alignPreview}
          onClick={handleDetailMove}
        >
          {boardContents?.map((content) => (
            <BoardContainer
              key={content.idx}
              data-idx={content.idx}
              id="boardContainer"
            >
              <BoardPreview
                previewType={previewType}
                content={content}
                type={boardType}
              />
            </BoardContainer>
          ))}
          <Footer
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalBoardContentLength={totalBoardContentLength}
          />
        </ContentContainer>
      </Suspense>
    </>
  );
};

export default BoardList;
