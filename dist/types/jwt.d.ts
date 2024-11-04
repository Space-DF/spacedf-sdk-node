export type JWK = {
    kty: 'EC' | 'RSA' | 'oct';
    crv?: 'P-256' | 'P-384' | 'P-521';
    x?: string;
    y?: string;
    e?: string;
    n?: string;
    use?: 'sig' | 'enc';
    kid?: string;
    alg?: string;
    ext?: boolean;
};
//# sourceMappingURL=jwt.d.ts.map