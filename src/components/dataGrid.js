import React, { Component } from 'react';
class dataGrid extends Component {
    render() {
        const { data, columns } = this.props
        return (
            <div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr style={{backgroundColor:"#F25308",color:"white"}}>
                            {columns.map(function (i) { return <th>{i.toUpperCase()}</th> })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(function (i) {
                            return <tr key={i.id}>
                                <td>{i[columns[0]]}</td>
                                <td>{i[columns[1]]}</td>
                                <td>{i[columns[2]]}</td>
                                <td>{i[columns[3]]}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default dataGrid;