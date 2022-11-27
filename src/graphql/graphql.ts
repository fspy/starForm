/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
};

export type Bitola = {
  __typename?: 'Bitola';
  formadora: Formadora;
  id: Scalars['ID'];
  passagens: Array<Passagem>;
  tamanho: Scalars['Float'];
};

export type Ferramenta = {
  __typename?: 'Ferramenta';
  frente?: Maybe<Scalars['String']>;
  fundo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  nome: Scalars['String'];
};

export type Formadora = {
  __typename?: 'Formadora';
  bitolas: Array<Bitola>;
  id: Scalars['ID'];
  nome: Scalars['String'];
};

export type Passagem = {
  __typename?: 'Passagem';
  entreRolos: Scalars['Float'];
  id: Scalars['ID'];
  inferior?: Maybe<Ferramenta>;
  lateral?: Maybe<Ferramenta>;
  nome: Scalars['String'];
  superior?: Maybe<Ferramenta>;
};

export type Query = {
  __typename?: 'Query';
  formadoras?: Maybe<Array<Formadora>>;
  passagens: Array<Passagem>;
};


export type QueryPassagensArgs = {
  bitolaId: Scalars['Int'];
};

export type FormadorasQueryVariables = Exact<{ [key: string]: never; }>;


export type FormadorasQuery = { __typename?: 'Query', formadoras?: Array<{ __typename?: 'Formadora', id: string, nome: string, bitolas: Array<{ __typename?: 'Bitola', id: string, tamanho: number }> }> | null };


export const FormadorasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Formadoras"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formadoras"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nome"}},{"kind":"Field","name":{"kind":"Name","value":"bitolas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tamanho"}}]}}]}}]}}]} as unknown as DocumentNode<FormadorasQuery, FormadorasQueryVariables>;