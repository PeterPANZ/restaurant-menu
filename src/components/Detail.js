import React from 'react';

const Detail = ( {menu, errMes, isLoading} ) => {
    return (
        <div>
            {
                errMes ? 
                <div>{errMes}</div>:
                menu === null?
                isLoading && <div>...isLoading</div>:
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map( (elem, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{elem.name}</td>
                                            <td>{elem.description}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default Detail;