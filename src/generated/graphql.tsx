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

export type DealershipInventoryActivityQueryVariables = {};


export type DealershipInventoryActivityQuery = (
  { __typename?: 'Query' }
  & { dealerships: Array<(
    { __typename?: 'Dealership' }
    & Pick<Dealership, 'id' | 'name'>
  )> }
);


export const DealershipInventoryActivityDocument = gql`
    query DealershipInventoryActivity {
  dealerships {
    id
    name
  }
}
    `;

/**
 * __useDealershipInventoryActivityQuery__
 *
 * To run a query within a React component, call `useDealershipInventoryActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useDealershipInventoryActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDealershipInventoryActivityQuery({
 *   variables: {
 *   },
 * });
 */
export function useDealershipInventoryActivityQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DealershipInventoryActivityQuery, DealershipInventoryActivityQueryVariables>) {
        return ApolloReactHooks.useQuery<DealershipInventoryActivityQuery, DealershipInventoryActivityQueryVariables>(DealershipInventoryActivityDocument, baseOptions);
      }
export function useDealershipInventoryActivityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DealershipInventoryActivityQuery, DealershipInventoryActivityQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DealershipInventoryActivityQuery, DealershipInventoryActivityQueryVariables>(DealershipInventoryActivityDocument, baseOptions);
        }
export type DealershipInventoryActivityQueryHookResult = ReturnType<typeof useDealershipInventoryActivityQuery>;
export type DealershipInventoryActivityLazyQueryHookResult = ReturnType<typeof useDealershipInventoryActivityLazyQuery>;
export type DealershipInventoryActivityQueryResult = ApolloReactCommon.QueryResult<DealershipInventoryActivityQuery, DealershipInventoryActivityQueryVariables>;