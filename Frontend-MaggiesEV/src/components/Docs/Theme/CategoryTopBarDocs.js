import React from 'react'
import CategoryTopBar from '../../CategoryTopBar'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CategoryTopBarDocs = () => {

    return (
        <div id="categorytopbar" className="docs-item element">
            <h5 className="text-uppercase mb-4">Category Top Bar</h5>
            <div className="docs-desc">
                <p className="lead">A simple component with items per page, items filter, ordering and no. of displayed items information. Displayed above the product grid.</p>
                <p className="lead my-3">Component supports <b>filter prop</b>, which enables products filter dropdown.</p>
            </div>
            <CategoryTopBar/>
            <div className="mt-5">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="rounded shadow p-4">
                    {highlightCode}
                </SyntaxHighlighter>
            </div>
        </div>
    )
};

export default CategoryTopBarDocs;

const highlightCode =
    `
import CategoryTopBar from '/CategoryTopBar'

const Component = () => {
    return (
        <CategoryTopBar />
    )
}

export default Component
`