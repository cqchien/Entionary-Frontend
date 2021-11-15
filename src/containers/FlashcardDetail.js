import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getOneFlashcards } from "../apis/flashcard";
import WordsSlide from "../components/WordsSlide";
import { setMessage } from "../redux/reducers/message.reducer";

const getWordsAtSpecificPage = (currentPage, listWords, numberWordPerPage) => {
  const words = listWords.current;
  const startPoint = currentPage - 1;
  const endPoint = startPoint + numberWordPerPage;
  return words.slice(startPoint, endPoint);
};

const FlashcardDetail = () => {
  const { id } = useParams();
  const listWords = useRef([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [currentPage, updateCurrentPage] = useState(1);

  const numberWordPerPage = 1;
  const currentWords = getWordsAtSpecificPage(
    currentPage,
    listWords,
    numberWordPerPage
  );

  const pagination = {
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < listWords.current.length / numberWordPerPage,
  };

  useEffect(() => {
    setLoading(true);

    const getDetailFlashcard = async () => {
      const apiResponse = await getOneFlashcards(id);

      const success = apiResponse?.success;
      const flashcard = apiResponse?.data?.flashcard;

      if (success) {
        listWords.current = flashcard.words;
      } else {
        dispatch(setMessage(apiResponse));
      }
      setLoading(false);
    };

    getDetailFlashcard();

    return () => {};
  }, [dispatch, id]);

  const handleNextPage = () => {
    return updateCurrentPage((prevPage) => (prevPage = prevPage + 1));
  };

  const handlePrevPage = () => {
    return updateCurrentPage((prevPage) => (prevPage = prevPage - 1));
  };

  return (
    <WordsSlide
      loading={loading}
      words={currentWords}
      pagination={pagination}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};

export default FlashcardDetail;
