import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "tweets" */
  delete_tweets?: Maybe<Tweets_Mutation_Response>;
  /** delete single row from the table: "tweets" */
  delete_tweets_by_pk?: Maybe<Tweets>;
  /** insert data into the table: "tweets" */
  insert_tweets?: Maybe<Tweets_Mutation_Response>;
  /** insert a single row into the table: "tweets" */
  insert_tweets_one?: Maybe<Tweets>;
  /** update data of the table: "tweets" */
  update_tweets?: Maybe<Tweets_Mutation_Response>;
  /** update single row of the table: "tweets" */
  update_tweets_by_pk?: Maybe<Tweets>;
};


/** mutation root */
export type Mutation_RootDelete_TweetsArgs = {
  where: Tweets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tweets_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_TweetsArgs = {
  objects: Array<Tweets_Insert_Input>;
  on_conflict?: InputMaybe<Tweets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tweets_OneArgs = {
  object: Tweets_Insert_Input;
  on_conflict?: InputMaybe<Tweets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TweetsArgs = {
  _inc?: InputMaybe<Tweets_Inc_Input>;
  _set?: InputMaybe<Tweets_Set_Input>;
  where: Tweets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tweets_By_PkArgs = {
  _inc?: InputMaybe<Tweets_Inc_Input>;
  _set?: InputMaybe<Tweets_Set_Input>;
  pk_columns: Tweets_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "tweets" */
  tweets: Array<Tweets>;
  /** fetch aggregated fields from the table: "tweets" */
  tweets_aggregate: Tweets_Aggregate;
  /** fetch data from the table: "tweets" using primary key columns */
  tweets_by_pk?: Maybe<Tweets>;
};


export type Query_RootTweetsArgs = {
  distinct_on?: InputMaybe<Array<Tweets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweets_Order_By>>;
  where?: InputMaybe<Tweets_Bool_Exp>;
};


export type Query_RootTweets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tweets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweets_Order_By>>;
  where?: InputMaybe<Tweets_Bool_Exp>;
};


export type Query_RootTweets_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "tweets" */
  tweets: Array<Tweets>;
  /** fetch aggregated fields from the table: "tweets" */
  tweets_aggregate: Tweets_Aggregate;
  /** fetch data from the table: "tweets" using primary key columns */
  tweets_by_pk?: Maybe<Tweets>;
};


export type Subscription_RootTweetsArgs = {
  distinct_on?: InputMaybe<Array<Tweets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweets_Order_By>>;
  where?: InputMaybe<Tweets_Bool_Exp>;
};


export type Subscription_RootTweets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tweets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tweets_Order_By>>;
  where?: InputMaybe<Tweets_Bool_Exp>;
};


export type Subscription_RootTweets_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "tweets" */
export type Tweets = {
  __typename?: 'tweets';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
};

/** aggregated selection of "tweets" */
export type Tweets_Aggregate = {
  __typename?: 'tweets_aggregate';
  aggregate?: Maybe<Tweets_Aggregate_Fields>;
  nodes: Array<Tweets>;
};

/** aggregate fields of "tweets" */
export type Tweets_Aggregate_Fields = {
  __typename?: 'tweets_aggregate_fields';
  avg?: Maybe<Tweets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tweets_Max_Fields>;
  min?: Maybe<Tweets_Min_Fields>;
  stddev?: Maybe<Tweets_Stddev_Fields>;
  stddev_pop?: Maybe<Tweets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tweets_Stddev_Samp_Fields>;
  sum?: Maybe<Tweets_Sum_Fields>;
  var_pop?: Maybe<Tweets_Var_Pop_Fields>;
  var_samp?: Maybe<Tweets_Var_Samp_Fields>;
  variance?: Maybe<Tweets_Variance_Fields>;
};


/** aggregate fields of "tweets" */
export type Tweets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tweets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tweets_Avg_Fields = {
  __typename?: 'tweets_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tweets". All fields are combined with a logical 'AND'. */
export type Tweets_Bool_Exp = {
  _and?: InputMaybe<Array<Tweets_Bool_Exp>>;
  _not?: InputMaybe<Tweets_Bool_Exp>;
  _or?: InputMaybe<Array<Tweets_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "tweets" */
export enum Tweets_Constraint {
  /** unique or primary key constraint */
  TweetsPkey = 'tweets_pkey'
}

/** input type for incrementing numeric columns in table "tweets" */
export type Tweets_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "tweets" */
export type Tweets_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Tweets_Max_Fields = {
  __typename?: 'tweets_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Tweets_Min_Fields = {
  __typename?: 'tweets_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "tweets" */
export type Tweets_Mutation_Response = {
  __typename?: 'tweets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tweets>;
};

/** on_conflict condition type for table "tweets" */
export type Tweets_On_Conflict = {
  constraint: Tweets_Constraint;
  update_columns?: Array<Tweets_Update_Column>;
  where?: InputMaybe<Tweets_Bool_Exp>;
};

/** Ordering options when selecting data from "tweets". */
export type Tweets_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tweets */
export type Tweets_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tweets" */
export enum Tweets_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "tweets" */
export type Tweets_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Tweets_Stddev_Fields = {
  __typename?: 'tweets_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tweets_Stddev_Pop_Fields = {
  __typename?: 'tweets_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tweets_Stddev_Samp_Fields = {
  __typename?: 'tweets_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Tweets_Sum_Fields = {
  __typename?: 'tweets_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "tweets" */
export enum Tweets_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Tweets_Var_Pop_Fields = {
  __typename?: 'tweets_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tweets_Var_Samp_Fields = {
  __typename?: 'tweets_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tweets_Variance_Fields = {
  __typename?: 'tweets_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type GetTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTweetsQuery = { __typename?: 'query_root', tweets: Array<{ __typename?: 'tweets', id: number, content: string, created_at: any }> };


export const GetTweets = gql`
    query GetTweets {
  tweets {
    id
    content
    created_at
  }
}
    `;