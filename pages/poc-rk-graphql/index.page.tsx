import { gql, useQuery } from '@apollo/client';

export function Page() {

    /*
    const query = gql`
    query CurrentUserQuery {
        CurrentUser {
            firstName
            lastName
            email
        }
    }`;
    */

    const query = gql`
    query CompanyDetailsQuery {
        CompanyDetails {
            name
            subdomain
        }
    }`;

    const {data} = useQuery(query);

    async function test() {
        console.log('hello world');
        console.log(data);
    }

    return (
        <div>
            <p>Hello World</p>
            <button onClick={() => test()}>test</button>
        </div>
    );
}