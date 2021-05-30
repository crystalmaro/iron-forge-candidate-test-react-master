
import * as React from 'react';
import _ from 'lodash';
// GraphQL
import {
  useDealershipInventoryPageControllerQuery as useBaseQuery,
  DealershipInventoryListQuery
} from 'generated/graphql';
// import { dealershipId } from '../DealershipInventoryPage';
const dealershipId = '3781905c-5402-44f7-9e3b-972adbea9855';

// export interface ListData {
//   dealership: DealershipInventoryListQuery;
// }

interface Props {
  type: string;
  searchStr: string;
}

export const useDealershipInventoryPageControllerQuery = ({type, searchStr}:Props) => {

  // TODO get params from useParams React Router

  const tuple = useBaseQuery({
      variables: { id: dealershipId },
    }
  );

  console.log('useDealershipInventoryPageControllerQuery tuple', tuple)


  // let type = 'all'
  // let type = 'rv'
  
  

  const filterInventory = React.useCallback((inventories) => {
    // if (type === 'all') {
    //   console.log('108 type is all')
    //   displayList = tuple.data?.dealership.vehicles;
    // }
    // else {
    //   console.log('112 specific type: '+ type)
    //   displayList = _.filter(tuple.data?.dealership.vehicles,
    //     {type: {name: type}}
    //   )
    // }

    //TODO filter logic and return new inventories
  },[])

  const inventories = React.useMemo(() => {
    if(!tuple) return []
    // TODO filter out inventories
    // const invt = tuple......
   // const filteredInventories = filterInventory(invt)
   //  return filteredInventories (array<obj>)
   return [
    {
      id: "739372f6-5df0-4e37-a44c-470d9fe0b9c9",
      type: {
        displayName: "RV",
        name: "rv",
        id: "68ed4495-a433-4292-9fb6-d5528dd7f7a9"
      },
      name: "2016 Panaphonic Recreational Vehicle RX456",
      address: "3330 Fairchild Gardens Ave, Palm Beach Gardens, FL 33410",
      imageUrl: "https://elasticbeanstalk-us-east-2-078538388162.s3.us-east-2.amazonaws.com/iron-forge-candidate-test/prod/images/vehicleImages/rv1.png",
      priceCentsPerDay: 14715
    },
    {
      id: "b4776ac5-19b6-4ddc-8802-9a5e9df5f1f5",
      type: {
        displayName: "RV",
        name: "rv",
        id: "68ed4495-a433-4292-9fb6-d5528dd7f7a9"
      },
      name: "2014 Magnetbox Sleeper SLP470",
      address: "3330 Fairchild Gardens Ave, Palm Beach Gardens, FL 33410",
      imageUrl: "https://elasticbeanstalk-us-east-2-078538388162.s3.us-east-2.amazonaws.com/iron-forge-candidate-test/prod/images/vehicleImages/rv2.png",
      priceCentsPerDay: 21245
    },
    {
      id: "a58f26b0-7a4f-4f5a-871a-9b4982b787e6",
      type: {
        displayName: "Jet ski",
        name: "jetSki",
        id: "aefe8abe-8ce2-4205-917e-fd3fd420df01"
      },
      name: "2000 Sorny Eclipse Z",
      address: "331 Null Island, Atlantic 00000",
      imageUrl: "https://elasticbeanstalk-us-east-2-078538388162.s3.us-east-2.amazonaws.com/iron-forge-candidate-test/prod/images/vehicleImages/jetSki4.png",
      priceCentsPerDay: 2370
    }
   ]
  },[])

  const dealerships = React.useMemo(() => {
    return {
      id: "a7fef0da-0e90-4e96-982d-f2340be94b97",
      name: "RV Kingdom",
      address: "3330 Fairchild Gardens Ave, Palm Beach Gardens, FL 33410",
      logoUrl: "https://elasticbeanstalk-us-east-2-078538388162.s3.us-east-2.amazonaws.com/iron-forge-candidate-test/prod/images/dealershipLogos/rvLogo.png",
    }
  },[])

  return {
    inventories,
    dealerships
  };
}