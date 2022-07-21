import { Flex, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { filterData, getFilterValues } from "../helpers/FilterData";

export const SearchFilters = () => {
  const router = useRouter();
  const { pathname, query } = router;

  const searchFiltersProperties = (filterValue) => {
    const vals = getFilterValues(filterValue);
    vals.forEach((item) => {
      if (item.value && filterValue?.[item.name]) {
        query[item.name] = item.value;
      }
    });
    router.push({ pathname, query });
  };

  return (
    <Flex bg={"blue.50"} flexWrap={"wrap"} justifyContent="center">
      {filterData?.map((itemFilter) => {
        return (
          <Select
            border={"1px"}
            w={"auto"}
            m="2"
            placeholder={itemFilter.placeholder}
            key={itemFilter.placeholder}
            onChange={(e) => {
              searchFiltersProperties({
                [itemFilter.queryName]: e.target.value,
              });
            }}
          >
            {itemFilter.items.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {" "}
                {opt.name}{" "}
              </option>
            ))}
          </Select>
        );
      })}
    </Flex>
  );
};
