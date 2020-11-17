<?php

namespace App\Http\Traits;

use Illuminate\Http\JsonResponse;

trait Messenger
{

    /**
     * Returns a JSON response with a general message
     *
     * @param int $status
     * @param string $msg
     * @param \Exception|string $exception
     * @return JsonResponse
     */
    public function getGeneralErrorResponse(int $status, string $msg, $exception = null): JsonResponse
    {
        return is_null($exception)
        ? response()->json(['message' => $msg], $status)
        : response()->json(['message' => $exception->getMessage()], $status);
    }

    /**
     * Returns a JSON response with a general 500 message
     *
     * @param int $status
     * @param string $msg
     * @param \Exception|string $exception
     * @return JsonResponse
     */
    public function getGeneral500Response($exception = null): JsonResponse
    {
        return $this->getGeneralErrorResponse(
            500,
            'Houve um erro interno no servidor, por favor, tente novamente mais tarde.',
            $exception
        );
    }

    /**
     * Returns a JSON response with a general 404 message
     *
     * @param \Exception|string $token
     * @return JsonResponse
     */
    public function getGeneral404Response($exception = null): JsonResponse
    {
        return $this->getGeneralErrorResponse(
            404,
            'Recurso não encontrado.',
            $exception
        );
    }

    /**
     * Returns a JSON response with a general 401 message
     *
     * @param \Exception|string $token
     * @return JsonResponse
     */
    public function getGeneral401Response($exception = null): JsonResponse
    {
        return $this->getGeneralErrorResponse(
            401,
            'Acesso não autorizado.',
            $exception
        );
    }
}
