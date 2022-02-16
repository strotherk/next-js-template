import { useRouter } from "next/router";
import React from "react";

const Example = () => {
    const router = useRouter();
    const { route } = router.query;

    return (
        <div style={{position: "fixed", top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            Hey! Im static and generated by lambda function - route: {route}
        </div>
    );
};

export async function getStaticProps() {
    return {
        revalidate: 20,
        props: {},
    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking",
    };
}

export default Example;
