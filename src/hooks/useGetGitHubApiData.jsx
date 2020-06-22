import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
// import parse from "parse-link-header";
import { updateCommits } from "../redux";
import formatDate from "./formatDate";

const useGetGitHubApiData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const config = {
            method: "get",
            url: "https://api.github.com/repos/Dabgan/Snowshop/commits?page=1",
        };

        axios(config)
            .then((res) => {
                let resCommits = [];
                // let resCommitsDates = [];
                console.log(res.data);
                // get and logout every commit on page
                // const links = parse(res.headers.link);
                for (let i = 0; i < res.data.length; i++) {
                    const date = new Date(res.data[i].commit.committer.date);
                    resCommits.push({
                        message: res.data[i].commit.message,
                        date: formatDate(date),
                    });
                }
                // console.log(resCommits);
                dispatch(updateCommits(resCommits));
                // go to next page and do the same
                // axios(links.next)
                //     .then((res) => {
                //         for (let i = 0; i < res.data.length; i++) {
                //             // console.log(res.data[i].commit.message);
                //             resCommits.push(res.data[i].commit.message);
                //         }
                //         console.log(resCommits);
                //     })
                //     .catch(() => console.log(`there is no next page`));
            })
            .catch((error) => console.log(error));
    }, [dispatch]);
};

export default useGetGitHubApiData;
