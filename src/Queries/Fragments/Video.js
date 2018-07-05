import { gql } from 'apollo-boost'

export default gql`
    fragment VideoData on Videos {
        id
        speaker {
            id
            name
        }
        description
        link
        name
        duration
        year
        tags {
            name
            id
        }
    }
`
