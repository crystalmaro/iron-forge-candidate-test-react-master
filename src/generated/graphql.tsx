import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Dealership = {
   __typename?: 'Dealership';
  id: Scalars['ID'];
  name: Scalars['String'];
  address: Scalars['String'];
  logoUrl: Scalars['String'];
  vehicles: Array<Vehicle>;
};

export type Query = {
   __typename?: 'Query';
  version: Scalars['String'];
  dealership: Dealership;
  dealerships: Array<Dealership>;
};


export type QueryDealershipArgs = {
  id: Scalars['ID'];
};


export type Vehicle = {
   __typename?: 'Vehicle';
  id: Scalars['ID'];
  owningDealership: Dealership;
  type: VehicleType;
  name: Scalars['String'];
  address: Scalars['String'];
  imageUrl: Scalars['String'];
  priceCentsPerDay: Scalars['Int'];
};

export type VehicleType = {
   __typename?: 'VehicleType';
  id: Scalars['ID'];
  name: Scalars['String'];
  displayName: Scalars['String'];
};

export type DealershipInventoryActivityControllerQueryVariables = {
  id: Scalars['ID'];
};


export type DealershipInventoryActivityControllerQuery = (
  { __typename?: 'Query' }
  & { dealership: (
    { __typename?: 'Dealership' }
    & Pick<Dealership, 'id' | 'name' | 'address' | 'logoUrl'>
    & { vehicles: Array<(
      { __typename?: 'Vehicle' }
      & Pick<Vehicle, 'id' | 'name' | 'address' | 'imageUrl' | 'priceCentsPerDay'>
      & { type: (
        { __typename?: 'VehicleType' }
        & Pick<VehicleType, 'displayName' | 'name' | 'id'>
      ) }
    )> }
  ) }
);


export const DealershipInventoryActivityControllerDocument = gql`
    query DealershipInventoryActivityController($id: ID!) {
  dealership(id: $id) {
    id
    name
    address
    logoUrl
    vehicles {
      id
      type {
        displayName
        name
        id
      }
      name
      address
      imageUrl
      priceCentsPerDay
    }
  }
}
    `;

/**
 * __useDealershipInventoryActivityControllerQuery__
 *
 * To run a query within a React component, call `useDealershipInventoryActivityControllerQuery` and pass it any options that fit your needs.
 * When your component renders, `useDealershipInventoryActivityControllerQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDealershipInventoryActivityControllerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDealershipInventoryActivityControllerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DealershipInventoryActivityControllerQuery, DealershipInventoryActivityControllerQueryVariables>) {
        return ApolloReactHooks.useQuery<DealershipInventoryActivityControllerQuery, DealershipInventoryActivityControllerQueryVariables>(DealershipInventoryActivityControllerDocument, baseOptions);
      }
export function useDealershipInventoryActivityControllerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DealershipInventoryActivityControllerQuery, DealershipInventoryActivityControllerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DealershipInventoryActivityControllerQuery, DealershipInventoryActivityControllerQueryVariables>(DealershipInventoryActivityControllerDocument, baseOptions);
        }
export type DealershipInventoryActivityControllerQueryHookResult = ReturnType<typeof useDealershipInventoryActivityControllerQuery>;
export type DealershipInventoryActivityControllerLazyQueryHookResult = ReturnType<typeof useDealershipInventoryActivityControllerLazyQuery>;
export type DealershipInventoryActivityControllerQueryResult = ApolloReactCommon.QueryResult<DealershipInventoryActivityControllerQuery, DealershipInventoryActivityControllerQueryVariables>;