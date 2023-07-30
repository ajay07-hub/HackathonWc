import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableRow, TableHead } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import Header from './Header';
import FilterComponent from './FilterComponent'



export default function SchedulePage() {
    // Placeholder data for the match list
    const [matchList, setMatchList] = useState([]);
    const [init, setInit] = useState(true);


    useEffect(() => {
        if (init) {
            setInit(false);
            setMatchList(matches);
        }
    }, [init]);

    var matches = [
        {
            id: 1,
            team1: 'India',
            team2: 'Australia',
            date: '2023-10-25',
            time: '14:00',
            venue: 'Wankhede Stadium, Mumbai',
        },
        {
            id: 2,
            team1: 'England',
            team2: 'New Zealand',
            date: '2023-10-26',
            time: '10:30',
            venue: 'Lord\'s Cricket Ground, London',
        },
        {
            id: 3,
            team1: 'England',
            team2: 'Australia',
            date: '2023-10-27',
            time: '14:00',
            venue: 'Narendra modi Stadium, Gujrat',
        },
        {
            id: 4,
            team1: 'India',
            team2: 'New Zealand',
            date: '2023-10-28',
            time: '10:30',
            venue: 'Mohali stadium, Mohali',
        },
        {
            id: 5,
            team1: 'Bangladesh',
            team2: 'Australia',
            date: '2023-10-29',
            time: '14:00',
            venue: 'Wankhede Stadium, Mumbai',
        },
        {
            id: 6,
            team1: 'Pakistan',
            team2: 'New Zealand',
            date: '2023-10-30',
            time: '10:30',
            venue: 'Chinna Swami stadium, Bangloor',
        },
        {
            id: 7,
            team1: 'India',
            team2: 'Pakistan',
            date: '2023-10-30',
            time: '14:00',
            venue: 'Rajiv Gandhi Stadium, Hyderabad',
        },
        {
            id: 8,
            team1: 'Pakistan',
            team2: 'Bangladesh',
            date: '2023-10-31',
            time: '10:30',
            venue: 'Delhi stadium, Delhi',
        },
        // Add more matches data here
    ];

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function sortMatchesByDateAsc(matches) {
        // Sort the matches in ascending order based on the date
        matches.sort((a, b) => new Date(a.date) - new Date(b.date));
        return matches;
    }
    function sortMatchesByDateDesc(matches) {

        // If you want to sort in descending order, use the following line instead:
        matches.sort((a, b) => new Date(b.date) - new Date(a.date));
        return matches;
    }

    const handleSortChange = (sortType) => {
        var sortedMatches = [...matches];
        switch (sortType) {
            case 'sortByDate':
                sortedMatches = sortMatchesByDateAsc(matches);
                break;
            case 'sortByTeams':
                sortedMatches = matches.sort((a, b) => a.team1.localeCompare(b.team1));
                break;
            case 'sortByVenues':
                sortedMatches = matches.sort((a, b) => a.venue.localeCompare(b.venue));
                break;
            default:
                break;
        }

        setMatchList(sortedMatches);
    };

    return (
        <>
            <Header></Header>

            <br />
            <Typography variant="h4" align="center" gutterBottom> Cricket World Cup Schedule</Typography>
            <br />
            {/* Filter Options */}
            <FilterComponent onSortChange={handleSortChange} />
            <br />
            <br />
            <Container maxWidth="md">
                {/* Match List */}
                <Table width="auto" aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Date</StyledTableCell>
                            <StyledTableCell align="center">Match and Venue</StyledTableCell>
                            <StyledTableCell align="right">Time&nbsp;(g)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {matchList.map((match) => (
                            <StyledTableRow key={match.id}>
                                <StyledTableCell component="th" scope="row">
                                    {new Date(match.date).toDateString()}
                                </StyledTableCell>
                                <StyledTableCell align="center">{match.team1} vs {match.team2}<br></br>{match.venue}</StyledTableCell>
                                <StyledTableCell align="right">{new Date(match.date).toLocaleString([], {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </>
    );

};

