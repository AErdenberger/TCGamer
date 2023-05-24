class Api::CommentsController < ApplicationController
    include ActiveStorage::SetCurrent

    wrap_parameters include: Comment.attribute_names + ["commenterId", "cardId"]

    def create
        @comment = Comment.new(comment_params)
        if comment.save
            render :show
        else
            render json: {errors: @comment.errors.full_messages}, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
        render json: {message: "Successfully Removed"}
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: {errors: @comment.errors.full_messages}, status: 422
        end
    end

    def index
        if params[:card_id]
            @comments = Comment.where(card_id: params[:card_id])
        else
            @comments = Comment.all
        end
        render :index
    end

    private
    def comment_params
        params.require(:comment).permit(:commenter_id, :card_id, :body)
    end
end
