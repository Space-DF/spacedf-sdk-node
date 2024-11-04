/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */
import { manual } from "./manual-types.js";
import * as auto from 'spacedf-sdk/_shims/auto/types';
import { type RequestOptions } from "../core.js";

type SelectType<Manual, Auto> = unknown extends Manual ? Auto : Manual;

export const kind: string;

export type Agent = SelectType<manual.Agent, auto.Agent>;

export const fetch: SelectType<typeof manual.fetch, typeof auto.fetch>;

// @ts-ignore-start
export type Request = SelectType<manual.Request, auto.Request>;

export type RequestInfo = SelectType<manual.RequestInfo, auto.RequestInfo>;

export type RequestInit = SelectType<manual.RequestInit, auto.RequestInit>;

export type Response = SelectType<manual.Response, auto.Response>;

export type ResponseInit = SelectType<manual.ResponseInit, auto.ResponseInit>;

export type ResponseType = SelectType<manual.ResponseType, auto.ResponseType>;

export type BodyInit = SelectType<manual.BodyInit, auto.BodyInit>;

export type Headers = SelectType<manual.Headers, auto.Headers>;

export const Headers: SelectType<typeof manual.Headers, typeof auto.Headers>;

export type HeadersInit = SelectType<manual.HeadersInit, auto.HeadersInit>;

export type BlobPropertyBag = SelectType<manual.BlobPropertyBag, auto.BlobPropertyBag>;

export type FilePropertyBag = SelectType<manual.FilePropertyBag, auto.FilePropertyBag>;

export type FileFromPathOptions = SelectType<manual.FileFromPathOptions, auto.FileFromPathOptions>;

export type FormData = SelectType<manual.FormData, auto.FormData>;

export const FormData: SelectType<typeof manual.FormData, typeof auto.FormData>;

export type File = SelectType<manual.File, auto.File>;

export const File: SelectType<typeof manual.File, typeof auto.File>;

export type Blob = SelectType<manual.Blob, auto.Blob>;

export const Blob: SelectType<typeof manual.Blob, typeof auto.Blob>;

export type Readable = SelectType<manual.Readable, auto.Readable>;

export type FsReadStream = SelectType<manual.FsReadStream, auto.FsReadStream>;

export type ReadableStream = SelectType<manual.ReadableStream, auto.ReadableStream>;

export const ReadableStream: SelectType<typeof manual.ReadableStream, typeof auto.ReadableStream>;

export type FileFromPathOptions = SelectType<manual.FileFromPathOptions, auto.FileFromPathOptions>;
// @ts-ignore-start
export function getMultipartRequestOptions<T = Record<string, unknown>>(form: FormData, opts: RequestOptions<T>): Promise<RequestOptions<T>>;

export function getDefaultAgent(url: string): any;

export function fileFromPath(path: string, options?: FileFromPathOptions): Promise<File>;
export function fileFromPath(path: string, filename?: string, options?: FileFromPathOptions): Promise<File>;

export function isFsReadStream(value: any): value is FsReadStream;
