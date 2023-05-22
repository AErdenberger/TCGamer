class Api::CommentsController < ApplicationController


    private
    def comment_params
        params.require(:comment).permit(:commenter_id, :card_id, :body)
    end
end
