import { useEffect } from "react";
import axios from "axios";
import parse from "parse-link-header";

const useGetGitHubApiData = () => {
    useEffect(() => {
        const config = {
            method: "get",
            url: "https://api.github.com/repos/Dabgan/Snowshop/commits?",
        };

        axios(config)
            .then((res) => {
                // get and logout every commit on page
                const links = parse(res.headers.link);
                for (let i = 0; i < res.data.length; i++) {
                    console.log(res.data[i].commit.message);
                }
                // go to next page and do the same
                axios(links.next).then((res) => {
                    for (let i = 0; i < res.data.length; i++) {
                        console.log(res.data[i].commit.message);
                    }
                });
            })
            .catch((error) => console.log(error));
    }, []);

    return null;
};

export default useGetGitHubApiData;
