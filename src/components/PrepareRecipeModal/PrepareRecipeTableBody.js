import React from 'react';
import PrepareRecipeTableBodyWithError from './PrepareRecipeTableBodyWithError';
import EmptyItemsTableBody from 'components/TableBody/EmptyItemsTableBody';
import LoadingSpinnerTableBody from 'components/TableBody/LoadingSpinnerTableBody';
import { useSelector } from 'react-redux';
import { getModalState } from 'selectors';

const PREPARE_RECIPE_TABLE_COLS = [
  { width: '45%', label: 'Ingredient' },
  { width: '25%', label: 'Recipe amount' },
  { width: '25%', label: 'Remaining amount' },
  { width: '5%', label: 'Availability' }
];

const PrepareRecipeTableBody = () => {
  const { hasError, isLoading, items, hasItems } = useSelector(getModalState);
  let modalTableBody;
  if (hasError) {
    modalTableBody = (
      <PrepareRecipeTableBodyWithError
        name={hasError.name}
        errors={hasError.errors}
        colSpan={PREPARE_RECIPE_TABLE_COLS.length}
      />
    );
  } else if (isLoading) {
    modalTableBody = (
      <LoadingSpinnerTableBody colSpan={PREPARE_RECIPE_TABLE_COLS.length} />
    );
  } else if (hasItems) {
    modalTableBody = (
      <tbody>
        {items.map(item => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>
              {item.amount} {item.unit}
            </td>
            <td>
              {item.remainingAmount} {item.unit}
            </td>
            <td style={{ textAlign: 'center' }}>
              {item.isCompleted ? (
                <i className="fas fa-check" />
              ) : (
                <i className="fas fa-times-circle" />
              )}
            </td>
            {}
          </tr>
        ))}
      </tbody>
    );
  } else {
    modalTableBody = (
      <EmptyItemsTableBody
        colSpan={PREPARE_RECIPE_TABLE_COLS.length}
        msg="No missing ingredients were found."
      />
    );
  }
  return modalTableBody;
};

export default PrepareRecipeTableBody;
