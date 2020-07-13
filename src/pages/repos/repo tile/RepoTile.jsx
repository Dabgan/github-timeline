import React from "react";
import * as styled from "./repoTile.styles.js";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import repoIcon from "@iconify/icons-octicon/repo";

const RepoTile = ({ data, getCommits }) => {
    return (
        <styled.Repo key={data.id}>
            <styled.RepoInfo
                as={Link}
                to="/timeline"
                onClick={() => getCommits(data.name)}
            >
                <styled.RepoTitle>
                    <Icon icon={repoIcon} />
                    <span>{data.name}</span>
                </styled.RepoTitle>
                <styled.RepoDesc>{data.description}</styled.RepoDesc>
            </styled.RepoInfo>
        </styled.Repo>
    );
};

export default RepoTile;
