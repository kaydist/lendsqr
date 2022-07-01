import React, {
  useState,
  useMemo,
  useEffect,
  createContext,
  useCallback,
  useLayoutEffect,
} from "react";

export const UsersListContext = createContext("");

function UsersListController({ children }) {
  const [usersList, setUsersList] = React.useState([]);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalCount, setTotalCount] = React.useState(0);

  useEffect(() => {
    setTotalCount(usersList.length);
  }, [usersList]);

  return (
    <UsersListContext.Provider
      value={{
        usersList,
        setUsersList,
        perPage,
        setPerPage,
        currentPage,
        setCurrentPage,
        totalCount,
      }}
    >
      {children}
    </UsersListContext.Provider>
  );
}

export default UsersListController;
