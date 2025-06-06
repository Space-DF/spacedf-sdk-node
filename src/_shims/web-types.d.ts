/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */
export type Agent = any;

declare const _fetch: typeof fetch;
export { _fetch as fetch };

type _Request = Request;
export { _Request as Request };

type _RequestInfo = RequestInfo;
export { type _RequestInfo as RequestInfo };

type _RequestInit = RequestInit;
export { type _RequestInit as RequestInit };

type _Response = Response;
export { _Response as Response };

type _ResponseInit = ResponseInit;
export { type _ResponseInit as ResponseInit };

type _ResponseType = ResponseType;
export { type _ResponseType as ResponseType };

type _BodyInit = BodyInit;
export { type _BodyInit as BodyInit };

type _Headers = Headers;
export { _Headers as Headers };

type _HeadersInit = HeadersInit;
export { type _HeadersInit as HeadersInit };

type EndingType = 'native' | 'transparent';

export interface BlobPropertyBag {
    endings?: EndingType;
    type?: string;
}

export interface FilePropertyBag extends BlobPropertyBag {
    lastModified?: number;
}

export type FileFromPathOptions = Omit<FilePropertyBag, 'lastModified'>;

type _FormData = FormData;
declare const _FormData: typeof FormData;
export { _FormData as FormData };

type _File = File;
declare const _File: typeof File;
export { _File as File };

type _Blob = Blob;
declare const _Blob: typeof Blob;
export { _Blob as Blob };

export declare class Readable {
    readable: boolean;
    readonly readableEnded: boolean;
    readonly readableFlowing: boolean | null;
    readonly readableHighWaterMark: number;
    readonly readableLength: number;
    readonly readableObjectMode: boolean;
    destroyed: boolean;
    read(size?: number): any;
    pause(): this;
    resume(): this;
    isPaused(): boolean;
    destroy(error?: Error): this;
    [Symbol.asyncIterator](): AsyncIterableIterator<any>;
}

export declare class FsReadStream extends Readable {
    path: object; // node type is string | Buffer
}

type _ReadableStream<R = any> = ReadableStream<R>;
declare const _ReadableStream: typeof ReadableStream;
export { _ReadableStream as ReadableStream };
