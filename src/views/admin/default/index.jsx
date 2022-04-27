// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import React, { useEffect, useState } from "react";
// import {covidDataArray} from '../default/variables/data'
import {stateData} from '../default/variables/stateData'

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    getCovidData();
  }, []);

  const getCovidData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://api.covidtracking.com/v1/us/daily.json", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log("result 60", result);
        setCovidData(result);
        // const data = result;
        // const a =[]
        // const updatedArray = data.map((res,i) => {
        //   a.push(...res,stateData)
        // })
        // console.log(668,a)
        // const updatedData = [ 
        //   ...data,
        //   stateData
        // ]
        // console.log(68,updatedData)
        // setCovidData(updatedData);

      })
      .catch((error) => {
        console.log("error 64", error);
      });
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div
        style={{
          flex: 1,
          // backgroundColor:'green',
          flexDirection: "row",
          flexWrap: "wrap",
          display: "flex",
        }}
      >
        {covidData ? (
          covidData.map((res, index) => {
            return (
              <div
                style={{
                  width: 300,
                  // height: 300,
                  paddingBottom:10,
                  backgroundColor: "white",
                  marginTop: 20,
                  marginLeft: 25,
                  borderRadius: 20,
                  boxShadow: "5px 5px 5px #BABABA",
                  borderWidth:0.5,
                  borderColor:'red'
                }}
              >
                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                  S.no:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                }}
                >{index + 1}</text>
                </div>
                {/* ////////////////////////////////////////////////// */}
                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                  Country:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                }}
                >United States of America</text>
                </div>
                {/* ////////////////////////////////////////////////// */}

                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                  State:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                }}
                >
                  {stateData[index]}
                  </text>
                </div>
                {/* ////////////////////////////////////////////////// */}

                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                   Test Results:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  color:'red'
                }}
                >{res?.totalTestResults}</text>
                </div>
                {/* ////////////////////////////////////////////////// */}
                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                   Postive Test Results:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  color:'red'
                }}
                >{res?.positive ? res?.positive : '0'}</text>
                </div>
                {/* ////////////////////////////////////////////////// */}
                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                   Negative Test Results:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  color:'red'
                }}
                >{res?.negative ? res?.negative : '0'}</text>
                </div>
                {/* ////////////////////////////////////////////////// */}
                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                   Pending Test Results:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  color:'red'
                }}
                >{res?.pending ? res?.pending : '0'}</text>
                </div>
                {/* ////////////////////////////////////////////////// */}
                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                   Recovered Patients:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  color:'red'
                }}
                >{res?.recovered ? res?.recovered : '0'}</text>
                </div>
                {/* ////////////////////////////////////////////////// */}
                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                  Patients Hospitalized Currently:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  color:'red'
                }}
                >{res?.hospitalizedCurrently ? res?.hospitalizedCurrently : '0'}</text>
                </div>
                {/* ////////////////////////////////////////////////// */}
                
                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                  Patients Currently In ICU:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  color:'red'
                }}
                >{res?.inIcuCurrently ? res?.inIcuCurrently : '0'}</text>
                </div>
                {/* ////////////////////////////////////////////////// */}
                
                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                  Patients Currently On Ventialtor:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  color:'red'
                }}
                >{res?.onVentilatorCurrently ? res?.onVentilatorCurrently : '0'}</text>
                </div>
                {/* ////////////////////////////////////////////////// */}
                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                  Patient Deaths:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  color:'red'
                }}
                >{res?.death ? res?.death : '0'}</text>
                </div>
                {/* ////////////////////////////////////////////////// */}
                <div style={{
                  flexDirection:'row',
                  display:'flex',
                  marginTop:10

                }}>
                <text
                  style={{
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                >
                   Death Increase:
                </text>
                <text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  color:'red'
                }}
                >{res?.deathIncrease ? res?.deathIncrease : '0'}</text>
                </div>
                {/* ////////////////////////////////////////////////// */}
                
              </div>
            );
          })
        ) : (
          <div
            style={{
              flex: 1,
              // backgroundColor:'green',
              alignItems: "center",
              justifyContent: "center",
              marginTop: 300,
            }}
          >
            <text
              style={{
                alignSelf: "center",
                marginLeft: 500,
                fontSize: 25,
              }}
            >
              Loading
            </text>
          </div>
        )}
      </div>

      {/* {
        covidData ? (
          <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={covidData ? covidData : null}
          />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
            <MiniCalendar h='100%' minW='100%' selectRange={false} />
          </SimpleGrid>
        </SimpleGrid>
        )
        : null
      } */}

      {/* <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Earnings'
          value='$350.4'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name='Spend this month'
          value='$642.39'
        />
        <MiniStatistics growth='+23%' name='Sales' value='$574.34' />
        <MiniStatistics
          endContent={
            <Flex me='-16px' mt='10px'>
              <FormLabel htmlFor='balance'>
                <Avatar src={Usa} />
              </FormLabel>
              <Select
                id='balance'
                variant='mini'
                mt='5px'
                me='0px'
                defaultValue='usd'>
                <option value='usd'>USD</option>
                <option value='eur'>EUR</option>
                <option value='gba'>GBA</option>
              </Select>
            </Flex>
          }
          name='Your balance'
          value='$1,000'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='New Tasks'
          value='154'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Total Projects'
          value='2935'
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid> */}
    </Box>
  );
}
