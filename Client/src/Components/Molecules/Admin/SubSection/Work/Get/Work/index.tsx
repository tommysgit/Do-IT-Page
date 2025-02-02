import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableTitle,
  TableBody,
  TableData,
} from "@Atoms/Table/styles";
import { PROJECT_TITLE } from "../List";
import { DeepWorkType, UserWorkType } from "../../type";
import { AcceptClick, DenyClick } from "../../util";

const Work = ({ work, type }: DeepWorkType) => {
  const userWork: UserWorkType[] = work.userStudies ?? work.userProjects;
  const handleAcceptClick = async ({ target }: { target: any }) =>
    AcceptClick({ target, type });

  const handleDenyClick = ({ target }: { target: any }) =>
    DenyClick({ target, type });

  return (
    <Table>
      <TableHead>
        <TableRow>
          {PROJECT_TITLE.map((item) => (
            <TableTitle key={item.key}>{item.title}</TableTitle>
          ))}
          <TableTitle>승인</TableTitle>
          <TableTitle>거절</TableTitle>
        </TableRow>
      </TableHead>
      <TableBody>
        {userWork?.map((item: UserWorkType) => (
          <TableRow
            key={item.userStudyIdx ?? item.userProjectIdx}
            id="userContainer"
            data-idx={item.userStudyIdx ?? item.userProjectIdx}
          >
            {PROJECT_TITLE.map((title) => {
              const text =
                title.key === ("status" || "userName")
                  ? item[title.key]
                  : work[title.key];
              return <TableData key={title.key}>{text}</TableData>;
            })}
            <TableData onClick={handleAcceptClick}>승인</TableData>
            <TableData onClick={handleDenyClick}>거절</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default React.memo(Work);
