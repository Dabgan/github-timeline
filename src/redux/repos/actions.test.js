import { getReposData } from "./reposActions";
import { getRepos } from "../../mocks/getReposMock";

describe("Repos Actions", () => {
    test("Repos are created correctly based on response from API", () => {
        const expectedState = [
            {
                created_at: "2020-07-17T14:54:59Z",
                description: "all about me",
                id: 280451849,
                name: "Dabgan",
            },
            {
                created_at: "2019-10-01T19:37:04Z",
                description: "My demos",
                id: 212183948,
                name: "Dabgan.github.io",
            },
            {
                created_at: "2020-06-21T16:10:04Z",
                description: "Github commits timeline app",
                id: 273939541,
                name: "github-timeline",
            },
        ];
        expect(getReposData(getRepos)).toEqual(expectedState);
    });
});
