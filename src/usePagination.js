const { useMemo } = require("react");

const usePagination = ({ totalSize, pageSize, siblingCount=1, currentPage }) => {
    const paginationRange = useMemo(() => {
        // logic goes in here;
    }, [totalSize, pageSize, siblingCount, currentPage]);
    return paginationRange;
}

export default usePagination;